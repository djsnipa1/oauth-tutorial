# ╔══════════════════════════════════════════════════════════╗
# ║                        replit.nix                        ║
# ╚══════════════════════════════════════════════════════════╝

{ pkgs }: {
  deps = with pkgs; [
    chromium
    nodejs-16_x
      nodePackages.typescript-language-server
      nodePackages.node-pre-gyp
      nodePackages.yarn
      nodePackages.pnpm
      nodePackages.nodemon
    neovim
    glow
    lf
    xplr
    fish
    gh
    wget
    http-prompt
    less
    bat
    exa
    glow
    mdcat
    delta
    boxes
    wgetpaste
    chezmoi
    figlet
    boxes
    ncdu
    gdu
    bottom
    tmux
    lazygit
    # Add more packages if needed
  ];
}
