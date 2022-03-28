## OBJETIVOS

Catalogar os algorimos de ordenação que já foram trabalhados anteriormente, como: 

  - quicksort - OK
  - bubblesort - OK
  - mergesort 
  - insertSort 
  - shellSort
    


e calcular o tempo de execução em 3 categorias.

  - Vetores totalmente aleatórios
  - Vetores ordenados decrescentemente
  - Vetores ordenadors crescentemente

### A atividade:
## para cada algoritmo de ordenação, faça
- abrir o arquivo ```testing.js``` e importar o conjunto de dados da pasta ```sets```.
- criar conjuntos de testes (colocar em vetores)
- para cada vetor, usar o trecho de código pronto do arquivo onde fala de "forEach", e alterá-lo conforme necessário para executar os testes

## executar os testes 3x e calcular a média para cada conjunto de elementos.


### Exemplo:
|          |  Random | Decr    | Ord      | Tempo
|----------|---------|---------|----------|---------
quicksort | 10      |         |          | 0 s
quicksort | 100     |         |          | 0.001 s
quicksort | 1000    |         |          | 0.008 s
quicksort |         | 10      |          | 0 s
quicksort |         | 100     |          | 0.001 s
quicksort |         | 1000    |          | 0.477 s
quicksort |         |         | 10       | 0 s
quicksort |         |         | 100      | 0.002 s
quicksort |         |         | 1000     | 0.334 s


#cálculo rapido
  - 6 algoritmos de ordenação
  - 3 conjuntos de dados
  - 15 intervalos de valores

  = 270 resultados * 3

  = 810 numeros e avaliá-los