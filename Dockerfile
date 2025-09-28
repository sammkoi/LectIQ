FROM python:3.13-slim
RUN apt-get update && apt-get install -y curl
COPY --from=ghcr.io/astral-sh/uv:0.8.3 /uv /uvx /bin/

WORKDIR /app
COPY . /app
RUN uv sync --locked

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
