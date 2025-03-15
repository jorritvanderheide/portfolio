{
  description = "A Nix-flake for the Toekomstpraktijken local development environment";
  inputs = {
    # Specify the Nixpkgs repository version to use for building the development environment
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.11";
  };
  outputs = {nixpkgs, ...}: let
    # Define the system architecture
    system = "x86_64-linux";
    # system = "x86_64-darwin";
  in {
    # Define the development shell for the specified system architecture
    devShells."${system}".default = let
      pkgs = import nixpkgs {
        inherit system;
      };
    in
      pkgs.mkShell {
        packages = with pkgs; [
          nodejs
        ];
        # Shell hook that executes when the development environment starts
        shellHook = ''
          # If the shell is Fish, start a new Fish shell session to ensure proper environment setup
          if [[ "$SHELL" == *"fish"* ]]; then
            exec fish
          fi

          # If no node_modules folder exists, install the project dependencies
          if [ ! -d node_modules ]; then
            npm install
          fi
        '';
      };
  };
}
