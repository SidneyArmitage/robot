# ROBOT App

## Setup

node js and npm should be installed.

Jest and typescript may need to be installed globally.

1) using the console run "``npm i``" in the project directory

2) test install by running  "``npm run a``" which will run the "a.txt" file in input.

## Running

Once installed this application can be run using the ``npm run a-c`` or ``npm run start [path to file]``
File extension must be included in the file uri.

## Tests

Tests are written using **jest** runnable with ``npm run test``

## Assumptions and Notes

* Invalid commands will be ignored
* table size is 5 with positions 0-4 inclusively for both x and y
* place command has one space between "PLACE" and the coordinate, after this it is comma separated
* The output has no spaces between commas and the next item (this is inline with specification)
* This was tested on windows