import { useCallback, useEffect, useRef } from 'react';
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react';
import { WuHeading, WuActivityLog } from '@npm-questionpro/wick-ui-lib';
import { activityLogs } from '@/data/home';

const MIN_THUMB_HEIGHT = 32;

/**
 * Viewport-anchored overlay scrollbar for the activity list.
 * Rendered `position: fixed` 16px from the viewport's right edge, mirroring
 * the target's scroll position. Desktop only (matches the `lg` breakpoint) —
 * on smaller screens the native styled scrollbar is used instead.
 */
function OverlayScrollbar({ targetRef }: { targetRef: RefObject<HTMLDivElement | null> }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const sync = useCallback(() => {
    const list = targetRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!list || !track || !thumb) return;

    const desktop = window.matchMedia('(min-width: 1024px)').matches;
    const scrollable = list.scrollHeight > list.clientHeight + 2;
    const active = desktop && scrollable;
    track.style.display = active ? 'block' : 'none';
    if (!active) return;

    const rect = list.getBoundingClientRect();
    track.style.top = `${rect.top}px`;
    track.style.height = `${rect.height}px`;

    const range = list.scrollHeight - list.clientHeight;
    const thumbHeight = Math.max(MIN_THUMB_HEIGHT, rect.height * (list.clientHeight / list.scrollHeight));
    const travel = Math.max(0, rect.height - thumbHeight);
    const offset = range > 0 ? (list.scrollTop / range) * travel : 0;
    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${offset}px)`;
  }, [targetRef]);

  useEffect(() => {
    const list = targetRef.current;
    if (!list) return;
    sync();
    list.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    const media = window.matchMedia('(min-width: 1024px)');
    media.addEventListener('change', sync);
    const observer = new ResizeObserver(sync);
    observer.observe(list);
    if (document.fonts) {
      document.fonts.ready.then(sync).catch(() => {});
    }
    return () => {
      list.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
      media.removeEventListener('change', sync);
      observer.disconnect();
    };
  }, [sync, targetRef]);

  const scrollToRatio = (ratio: number) => {
    const list = targetRef.current;
    if (!list) return;
    const clamped = Math.min(1, Math.max(0, ratio));
    list.scrollTop = clamped * (list.scrollHeight - list.clientHeight);
  };

  const handleTrackPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    scrollToRatio((e.clientY - rect.top) / rect.height);
  };

  const handleThumbPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const list = targetRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!list || !track || !thumb) return;
    const startY = e.clientY;
    const startScrollTop = list.scrollTop;
    const range = list.scrollHeight - list.clientHeight;
    const travel = track.clientHeight - thumb.clientHeight;
    if (travel <= 0 || range <= 0) return;
    const handleMove = (ev: PointerEvent) => {
      list.scrollTop = startScrollTop + ((ev.clientY - startY) / travel) * range;
    };
    const handleUp = () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="overlay-scroll-track"
      style={{ display: 'none' }}
      onPointerDown={handleTrackPointerDown}
    >
      <div ref={thumbRef} className="overlay-scroll-thumb" onPointerDown={handleThumbPointerDown} />
    </div>
  );
}

export function ActivitySection() {
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex h-full flex-1 flex-col">
      <div className="mb-3">
        <WuHeading size="md" className="text-[#1b3380]">
          Activity
        </WuHeading>
      </div>
      <div className="flex min-h-0 flex-1 flex-col py-3">
        <div
          ref={listRef}
          className="thin-scroll overlay-scroll-native-hide min-h-0 flex-1 overflow-auto overscroll-contain px-1 lg:min-h-0"
        >
          <WuActivityLog
            logs={activityLogs}
            accessorKey={{
              id: 'id',
              date: 'date',
              time: 'time',
              userName: 'userName',
              userInitials: 'userInitials',
              description: 'description',
              tags: 'tags',
            }}
          />
        </div>
      </div>
      <OverlayScrollbar targetRef={listRef} />
    </section>
  );
}
