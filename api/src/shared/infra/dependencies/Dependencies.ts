export class Dependencies {
    private static instances: Map<string, any> = new Map();

    static register<T>(token: string, instance: T): void {
        Dependencies.instances.set(token, instance);
    }

    static get<T>(token: string): T {
        const instance = Dependencies.instances.get(token);

        if (!instance) {
            throw new Error(`No instance registered for token: ${token}`);
        }

        return instance;
    }

    static clear(): void {
        Dependencies.instances.clear();
    }
} 