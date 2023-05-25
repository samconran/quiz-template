import { expect, it } from "vitest";
import quiz from "../src/assets/quiz.json";

it("Should have a title.", _ => {
    expect(quiz.title).toBeDefined();
    expect(quiz.title.length).toBeGreaterThan(0);
});

it("Should have rounds populated.", _ => {
    expect(quiz.rounds).toBeDefined();
    expect(Array.isArray(quiz.rounds)).toBe(true);
    expect(quiz.rounds.length).toBeGreaterThan(0);
});

it("Should have all rounds populated with a question field.", _ => {
    quiz.rounds.forEach(({ question }) => {
        expect(question).toBeDefined();
        expect(question).toBeTypeOf("object");
    });
});

it("Should have all questions populated with a valid type field.", _ => {
    quiz.rounds.forEach(({ question }) => {
        expect(question.type).toBeDefined();
        expect(question.type).toMatch(/^(normal|inline-image|bg-image)$/);
    });
});

it("Should have any inline/bg image questions populated with an image field", _ => {
    quiz.rounds.forEach(({ question }) => {
        if ((question.type === "inline-image") | "bg-image") {
            expect(question.image).toBeDefined();
            expect(question.image).toBeTypeOf("string");
        }
    });
});

it("Should have all questions populated with a text field.", _ => {
    quiz.rounds.forEach(({ question }) => {
        expect(question.text).toBeDefined();
        expect(question.text.length).toBeGreaterThan(0);
    });
});

it("Should have all rounds populated with an answer field.", _ => {
    quiz.rounds.forEach(({ answer }) => {
        expect(answer).toBeDefined();
        expect(answer).toBeTypeOf("object");
    });
});

it("Should have all answers populated with a valid type field.", _ => {
    quiz.rounds.forEach(({ answer }) => {
        expect(answer.type).toBeDefined();
        expect(answer.type).toMatch(/^(normal|inline-image|bg-image)$/);
    });
});

it("Should have any inline/bg image answers populated with an image field", _ => {
    quiz.rounds.forEach(({ answer }) => {
        if ((answer.type === "inline-image") | "bg-image") {
            expect(answer.image).toBeDefined();
            expect(answer.image).toBeTypeOf("string");
        }
    });
});

it("Should have all normal answers populated with a text field.", _ => {
    quiz.rounds.forEach(({ answer }) => {
        if (answer.type === "normal") {
            expect(answer.text).toBeDefined();
            expect(answer.text.length).toBeGreaterThan(0);
        }
    });
});

it("Should have all rounds populated with an points field.", _ => {
    quiz.rounds.forEach(({ points }) => {
        expect(points).toBeDefined();
        expect(points).toBeTypeOf("number");
    });
});
