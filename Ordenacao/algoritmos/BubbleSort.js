/**
 void bubble_sort (int vetor[], int n) {
    int k, j, aux;

    for (k = 1; k < n; k++) {
        printf("\n[%d] ", k);

        for (j = 0; j < n - 1; j++) {
            printf("%d, ", j);

            if (vetor[j] > vetor[j + 1]) {
                aux          = vetor[j];
                vetor[j]     = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
}

 */

function bubbleSort(vetor) {
    let k, j, aux;

    for (k = 1; k < vetor.length; k++) {
        // printf("\n[%d] ", k);

        for (j = 0; j < vetor.length - 1; j++) {
            // printf("%d, ", j);

            if (vetor[j] > vetor[j + 1]) {
                aux          = vetor[j];
                vetor[j]     = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
    return vetor;
}
export default bubbleSort;

// console.log(bubble_sort([5,4,3,2,1]))