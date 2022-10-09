import { useEffect, useState } from "react"

// https://gist.github.com/rikukissa/cb291a4a82caa670d2e0547c520eae53
export function useAddToHomeScreenPrompt() {
    const [prompt, setState] = useState({
        state: false,
        promptEvent: null,
    });
    const promptToInstall = () => {
        if (prompt.state) {
            return prompt.promptEvent.prompt();
        }
        return Promise.reject(
            new Error(
                'Tried installing before browser sent "browserInstallprompt'
            )
        );
    };

    useEffect(() => {
        const ready = (e) => {
            e.preventDefault();
            setState({
                state: true,
                promptEvent: e,
            });
        };
        window.addEventListener('beforeinstallprompt', ready);
        return () => {
            window.removeEventListener('beforeinstallprompt', ready)
        };
    }, []);

    return [prompt, promptToInstall];
}