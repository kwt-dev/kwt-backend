FROM pgvector/pgvector:pg15

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy initialization scripts
COPY init/ /docker-entrypoint-initdb.d/

# Default environment variables
ENV POSTGRES_DB=strapi
ENV POSTGRES_USER=strapi
ENV POSTGRES_PASSWORD=strapipassword

EXPOSE 5432