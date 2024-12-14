import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-[704px] items-center justify-between px-6 py-3">
      <div className="text-muted text-small">© Shogo Oshima</div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </footer>
  );
};

export { Footer };
