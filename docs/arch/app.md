# Podcast Manager

### Descrição

Um App ao estilo netflix, aonde possa centralizar diferentes episódio podcasts 
separados por categoria

### Dominio

Podcasts feitos em Vídeo

### Features 

- Listas os episodios podcasts em sessoes de categorias
    - Saude,fitness,mentalidade,humor
-Filtrar episodios por nome de Podcast

### Como

### Feature
Listar os episodios podcasts em sessoes de categorias

### Como vou Implementar 

Vou retornar em uma api rest (json) o 
nome podcast, nome do episodio, imagem de capa,link,categoria,id

```js
[
  {
    podcastName: "flow",
    episode: "CBUM – Flow #319",
    videoID:"pQSuQmUfs30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfs30/hqdefault.jpg?sqp=oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4StKVMSNz3eXH6WV2s3phlBT8kQ",
    link: "https://www.youtube.com/watch?v=pQSuQmUfs30",
    categories: ["saúde","esporte", "bodybuilder"]
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO – Flow #339",
     videoID:"4KDGTdiOv4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOv4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOv4I",
    categories: ["esporte", "corrida"]
  }
]

```