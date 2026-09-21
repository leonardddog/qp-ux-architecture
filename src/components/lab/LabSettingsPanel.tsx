import './LabSettingsPanel.css';

interface LabSettingsPanelProps {
  open: boolean;
  onClose: () => void;
  studiesApproach: 'default' | 'unified';
  onStudiesApproachChange: (value: 'default' | 'unified') => void;
}

export function LabSettingsPanel({
  open,
  onClose,
  studiesApproach,
  onStudiesApproachChange,
}: LabSettingsPanelProps) {
  return (
    <aside
      id="labSettingsPanel"
      className={`lab-settings-panel${open ? ' is-open' : ''}`}
      aria-hidden={!open}
      aria-label="Lab settings"
    >
      <div className="lab-settings-panel__header">
        <h2 className="lab-settings-panel__title">Lab settings</h2>
        <div className="lab-settings-panel__header-actions">
          <button
            type="button"
            className="lab-settings-panel__icon-btn"
            aria-label="Close lab settings"
            onClick={onClose}
            title="Close"
          >
            {/* close icon - uses wick icon font fallback + inline svg like resex collapse icon */}
            <span className="wm-close" aria-hidden="true" style={{ fontSize: 18 }} />
          </button>
        </div>
      </div>

      <div className="lab-settings-panel__controls">
        <div className="lab-settings-panel__control-row">
          <span className="lab-settings-panel__control-label">Enabled: 1/1</span>
          <input type="checkbox" className="lab-settings-toggle" aria-label="Toggle all lab settings" />
        </div>
        <div className="lab-settings-panel__control-row">
          <span className="lab-settings-panel__control-label">Groups: Collapsed</span>
          <input type="checkbox" className="lab-settings-toggle" aria-label="Toggle groups" />
        </div>
      </div>

      <div className="lab-settings-panel__body">
        <div className="lab-settings-panel__section">
          <h3 className="lab-settings-panel__section-title">Studies navigation</h3>
          <div className="lab-settings-list" role="radiogroup" aria-label="Studies navigation approach">
            <label className="lab-settings-item">
              <span>
                Default
                <span className="lab-settings-item__desc">Experience + Research groups</span>
              </span>
              <input
                type="radio"
                name="studies-approach"
                value="default"
                checked={studiesApproach === 'default'}
                onChange={() => onStudiesApproachChange('default')}
                aria-label="Default studies navigation"
              />
            </label>
            <label className="lab-settings-item">
              <span>
                Unified
                <span className="lab-settings-item__desc">Single Research › Studies</span>
              </span>
              <input
                type="radio"
                name="studies-approach"
                value="unified"
                checked={studiesApproach === 'unified'}
                onChange={() => onStudiesApproachChange('unified')}
                aria-label="Unified studies navigation"
              />
            </label>
          </div>
        </div>

        <div className="lab-settings-panel__section">
          <h3 className="lab-settings-panel__section-title">Customize project</h3>
          <div className="lab-settings-list">
            <div className="lab-settings-item">
              <span>No more features available</span>
            </div>
            <div className="lab-settings-placeholder">
              This drawer pushes the content (like the left sidebar) and is completely hidden when closed. Right now there are no
              special features — styles are copied from the reference: <code>resex-labs.vercel.app</code> (
              <code>.survey-settings-panel</code>, <code>--settings-panel-width: 300px</code>,{' '}
              <code>transform 0.25s ease</code>, push via <code>body.lab-settings-panel-open</code>).
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
