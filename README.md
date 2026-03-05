# chemdb-backend

Backend API for chemdb (FastAPI, Python 3.13).

## Prerequisites

- **Python 3.13+**
- **[uv](https://docs.astral.sh/uv/)** (recommended) or pip

Install uv:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Build from scratch (local)

1. **Clone and enter the repo**

   ```bash
   git clone <repo-url> chemdb-backend && cd chemdb-backend
   ```

2. **Create a virtual environment and install dependencies (with uv)**

   ```bash
   uv sync
   ```

   Or with pip:

   ```bash
   python -m venv .venv
   source .venv/bin/activate   # Windows: .venv\Scripts\activate
   pip install -e .
   ```

3. **Run the API locally**

   ```bash
   uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

   Or with the venv activated: `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`

   API base URL: **http://localhost:8000**  
   Docs: **http://localhost:8000/docs**

## Docker

### Build and run with Docker

```bash
docker build -t chemdb-backend .
docker run -p 8000:8000 --env-file .env chemdb-backend
```

Create a `.env` file in the project root if the app expects any environment variables (see [Environment variables](#environment-variables)).

### Run with Docker Compose

```bash
docker compose up --build
```

Uses `Dockerfile` and mounts the project directory; loads env from `.env`. API: **http://localhost:8000**.

## Deployment

Deployments are configured for **Fly.io**. See **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** for:

- First-time Fly.io setup and app creation
- Configuring GitHub Actions for deploy-on-push
- Required secrets and `fly.toml` overview
- Manual deploy and troubleshooting

Quick manual deploy (after Fly CLI and app are set up):

```bash
flyctl deploy --remote-only
```

## Environment variables

- **Local / Docker Compose**: set variables in a `.env` file in the project root (see `.env.example` if present).
- **Fly.io**: set via `flyctl secrets set KEY=value` or the Fly dashboard; these are available at runtime in the app.

## Project layout

- `app/` – FastAPI app, API routes, services, models
- `app/main.py` – App entrypoint; uvicorn runs this
- `pyproject.toml` / `uv.lock` – Dependencies (managed with uv)
- `Dockerfile` – Image build for Docker and Fly
- `fly.toml` – Fly.io app config (region, VM size, HTTP port)
- `.github/workflows/fly-deploy.yml` – Deploy to Fly on push to `main`

## Notes / TODO

- Make service just fill SQL DB; access DB directly from Next.js.
- Consider object store for images.
- Cache fetched data on the Next.js side.
