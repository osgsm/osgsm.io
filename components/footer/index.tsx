import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <footer className="~px-5/8 mx-auto mt-auto flex w-full max-w-7xl items-center justify-between pt-12 pb-3">
      <div className="text-muted text-small">© Shogo Oshima</div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </footer>
  );
};

export { Footer };
