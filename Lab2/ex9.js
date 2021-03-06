/**
 * Faça um programa que recebe a altura 
 * (em metros) 
 * e o sexo de uma pessoa e retorna o seu 
 * peso ideal 
 * através da seguinte fórmula: 
 * • Homens: peso = 72.7 * altura - 58; 
 * • Mulheres: peso = 62.1 * altura - 44.7;
 */

const homensPeso = 
  altura => 72.7 * altura - 58; 
const mulheresPeso = 
  altura => 62.1 * altura - 44.7;

console.log(mulheresPeso(1.65))