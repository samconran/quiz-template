# IE Weekly Quiz Template

This template allows for the IE weekly quiz to be quickly written by simply editing the [quiz.json](./src/assets/quiz.json) file in `src/assets`.

The presentation itself is rendered using svelte and uses reveal.js to power the slides. This sits inside a vite environment. Vitest is used for unit testing.

## Quiz JSON format

An example quiz.json file has been provided. This is my quiz from week 4 and has been ported over to this template to illustrate how the JSON file should be structured. For more details on all the available/valid JSON properties, please see the following documentation.

### Top Level Properties

| Property | Type         | Description                                                                                    |
| -------- | ------------ | ---------------------------------------------------------------------------------------------- |
| `title`  | String       | The title for your quiz, to be displayed on the first slide                                    |
| `rounds` | Array<Round> | An array of round objects, documented below. These are fed into each round (question + answer) |

### Round Objects

| Property   | Type     | Description                                                                                |
| ---------- | -------- | ------------------------------------------------------------------------------------------ |
| `question` | Question | A Question Object, documented below. This contains the information for each question slide |
| `answer`   | Answer   | An Answer Object, documented below. This contains the information for each answer slide    |
| `points`   | Number   | A number indicating how many points are available by answering this question correctly     |

### Question Objects

| Property | Type   | Description                                                                                                                                |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `text`   | String | The text of the question                                                                                                                   |
| `type`   | String | One of "normal", "inline-image" or "bg-image". If inline image or BG image types are selected, an `image` property _must_ also be provided |
| `image`  | String | (Optional) A valid URL to an image/gif                                                                                                     |

### Answer Objects

| Property | Type   | Description                                                                                                                                |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `text`   | String | (Optional) The text of the answer. If no text is provided, then an `image` field _must_ be provided.                                       |
| `type`   | String | One of "normal", "inline-image" or "bg-image". If inline image or BG image types are selected, an `image` property _must_ also be provided |
| `image`  | String | (Optional) A valid URL to an image/gif                                                                                                     |
| `detail` | String | (Optional) A string containing any extra context/detail you want to provide to the answer                                                  |

## How to Run a Quiz

If you are not familiar with Vite, running this solution is fairly simple.

Ensure you have installed the required modules by running `npm i` first.

To serve the quiz, you can either run this using using vite's local HMR-powered development server by running `npm run dev`, or you can build the solution using `npm run build` and then serve the build with `npm run preview`;

## Testing

Also provided are some vitest-powered unit tests which will validate your `quiz.json` to make sure it is a valid quiz. You can run these tests by running `npm run test`.

The source code for these unit tests can be viewed [here](./tests/quiz-structure.js).
