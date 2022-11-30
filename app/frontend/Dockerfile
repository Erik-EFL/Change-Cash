# Define a image a ser utilizada
FROM node:16.14-alpine
# Define o diretório de trabalho
WORKDIR /app-frontend
# Copia o arquivo entrypoint.sh para o diretório de trabalho
COPY entrypoint.sh /entrypoint.sh
# Executa o arquivo entrypoint.sh
RUN chmod +x /entrypoint.sh

# Install dependencies
ADD . .
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["npm", "run", "dev"]
