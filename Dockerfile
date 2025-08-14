FROM oven/bun:latest

WORKDIR /app

# Copy package files
COPY package.json ./
COPY bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Build the application
RUN bun run build

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
