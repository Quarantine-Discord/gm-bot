import { AddCommand } from './objects';

export function register_custom_commands(add_command: AddCommand, help_getter: () => Map<string, string>) {
    // Use this for registering custom commands you don't want on git.
    // It is invoked immediately after the regular commands file.
}