const FooterSection = () => {
  return (
    <footer className="px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="font-display text-xl font-bold tracking-tight">CodeExplainer</span>
          <p className="font-body text-sm text-muted-foreground mt-2">
            AI-powered codebase understanding.
          </p>
        </div>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors duration-100">Docs</a>
          <a href="#" className="hover:text-foreground transition-colors duration-100">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors duration-100">Blog</a>
          <a href="#" className="hover:text-foreground transition-colors duration-100">Contact</a>
        </div>
      </div>
      <div className="h-px bg-border-light mt-8 mb-6" />
      <p className="font-mono text-xs text-muted-foreground">
        © 2026 CodeExplainer. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
