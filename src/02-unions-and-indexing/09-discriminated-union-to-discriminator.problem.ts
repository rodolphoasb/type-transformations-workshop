import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type EventType = Event["type"];

// when you access a key on a union, you're actually accessing all of the possible permutations of that key.

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
