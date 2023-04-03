# TechBeer
This is a project developed as part of the computer science program at Tecnológico de Monterrey. The project *TechBeer* was developed by *Jorge A. Jiménez, Mariana G. Loya, David E. Gutiérrez, Karen L. Rivera, Gilberto A. Cordero* for the course *Modelación de la ingeniería con matemática computacional* under the supervision of *Miguel A. López*.

## Overview
This GitHub repository contains the beer mug model file and the user interface source code, as well as the backend source code.

The project's main objective was to create a model suitable for 3D printing, as well as an application that would allow users to visualize the temperature of their drink in real time. The user interface was designed to be simple and easy to use, with intuitive controls for navigation and interaction with the beer mug.

## Installation and usage

### Frontend
You will need to have [Node.js](https://nodejs.org/en/download) and [PNPM](https://pnpm.io/installation) installed on your system. Once you have *Node.js* and *PNPM* installed, you can clone the project from the GitHub repository and navigate to the project directory in your terminal.

```sh
cd ./frontend/

# Install the required dependencies for the frontend
pnpm install

# Start the development server
pnpm dev
```

### Backend
All the backend code is contained in the `main.py` file, which can be found in the project's *python* directory. You will need to have a Raspberry Pi Micro W flashed with [MicroPython](https://micropython.org/download/) and a DHT11 temperature sensor, connected to the 16th PIN.

### Compiling
1. Copy all the files in the `python` directory to your Raspberry Pi root directory.
2. Build the frontend application by running the following command in the `code-splitter` directory.
`build.bat` (Windows) or `build.sh` (Linux).
3. Copy all the files in the `dist` directory to your Raspberry Pi root directory.

## License
This project is licensed under the GPL-3.0 License - see the LICENSE file for details.