# Define a image a ser utilizada
FROM node:18-alpine
# Define o diretório de trabalho
WORKDIR /app-frontend
# Copia o arquivo entrypoint.sh para o diretório de trabalho
COPY entrypoint.sh /entrypoint.sh
# Executa o arquivo entrypoint.sh
RUN chmod +x /entrypoint.sh

# Install dependencies
ADD . .
# Executar o entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
# Executar o comando npm run dev
CMD ["npm", "run", "dev"]
