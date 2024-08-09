type EventCallback = (...data: any[]) => void;
interface MapEventValue {
    once: boolean;
    handle: EventCallback;
}
export class BusPlus {
    maps: Map<string, MapEventValue[]>;
    constructor(maps = new Map()) {
        this.maps = maps;
    }
    private useEvent(key: string, event: EventCallback, once: boolean) {
        const value = {
            once,
            handle: event
        }
        if (this.maps.has(key)) {
            const source = this.maps.get(key)!;
            source.push(value);
            this.maps.set(key, source);
        } else {
            this.maps.set(key, [value]);
        }
    }
    on(key: string, event: EventCallback) {
        this.useEvent(key, event, false);
        return this;
    }
    once(key: string, event: EventCallback) {
        this.useEvent(key, event, true);
    }
    off(key: string, event?: EventCallback) {
        if (typeof event === "function") {
            const source = this.maps.get(key)! || [];
            this.maps.set(key, source.filter(e => e.handle !== event));
        } else {
            this.maps.delete(key);
        }
        return this;
    }
    emit(key: string, ...args: any[]) {
        const events = this.maps.get(key) || [];
        events.forEach(item => {
            item.handle(...args);
            if (item.once) {
                this.off(key, item.handle);
            }
        });
        return this;
    }
    has(key: string, event?: EventCallback) {
        const events = this.maps.get(key) || [];
        return events.some(item => item.handle === event);
    }
    clear() {
        this.maps.clear();
        return this;
    }
}