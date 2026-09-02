import { Link } from 'react-router-dom';
import { WuHeading, WuText, WuButton } from '@npm-questionpro/wick-ui-lib';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <WuHeading size="xl">404</WuHeading>
      <WuText size="lg" className="mt-2">
        Page not found
      </WuText>
      <Link to="/" className="mt-6">
        <WuButton variant="primary">Go home</WuButton>
      </Link>
    </div>
  );
}
