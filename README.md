# eelsystemd

A desktop GUI application for viewing systemd service status, built with Python Eel and React.

## Overview

eelsystemd provides a modern web-based interface for monitoring systemd services on Linux systems. The application combines a Python backend that queries systemctl with a React frontend using Adobe's React Spectrum design system.

## Features

- View systemd unit status in a sortable table
- Dark and light theme support
- Clean, accessible interface built with React Spectrum
- Real-time service information parsing via jc

## Requirements

- Python 3.10 or higher
- Node.js and Yarn
- Linux with systemd

## Installation

### Backend Setup

```bash
# Install Python dependencies using Poetry
poetry install
```

### Frontend Setup

```bash
# Navigate to the web directory
cd src/eelsystemd/web

# Install Node dependencies
yarn install

# Build the frontend
yarn parcel build src/index.html
```

## Usage

Run the application:

```bash
poetry run eelsystemd
```

The GUI will open in a new window displaying your system's service status.

## Project Structure

```
eelsystemd/
├── src/
│   └── eelsystemd/
│       ├── main.py              # Python backend with Eel
│       └── web/
│           └── src/
│               ├── App.tsx      # React application root
│               └── components/
│                   └── Main.tsx # Service table component
├── pyproject.toml               # Poetry configuration
└── README.md
```

## Tech Stack

**Backend:**
- Python 3.10+
- Eel for Python/JavaScript bridge
- jc for parsing systemctl output

**Frontend:**
- React 18
- TypeScript
- Adobe React Spectrum
- Parcel bundler

## License

MIT
