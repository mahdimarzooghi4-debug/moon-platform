FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

ARG VITE_OIDC_AUTHORITY
ARG VITE_OIDC_CLIENT_ID=moon-web
ARG VITE_API_BASE_URL
ENV VITE_OIDC_AUTHORITY=${VITE_OIDC_AUTHORITY}
ENV VITE_OIDC_CLIENT_ID=${VITE_OIDC_CLIENT_ID}
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN test -n "$VITE_OIDC_AUTHORITY" \
    && test -n "$VITE_OIDC_CLIENT_ID" \
    && test -n "$VITE_API_BASE_URL" \
    && npm run build

FROM nginx:1.27-alpine AS runtime
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
USER nginx
