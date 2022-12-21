export default class Helpers  {
  static formateIniciais = (nome: string): string => {
    return nome.charAt(0).toUpperCase() + nome.slice(1)
  }

  static formatDate(info: Date | string): string | undefined {
    if (typeof info !== 'string' && !(info instanceof Date)) return 'DD/MM/AA';
    if (info) {
      const date = new Date(info);
      return new Intl.DateTimeFormat('pt-BR').format(date);
    }
  }

  static formatAmount(price: number): string {
    const num = Number(price);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  }

  static convertNumbers(number: number): string | number | undefined {
    if (!number) return '0000';

    let numString = String(number);
    while (numString.length < 4) {
      numString = `0${numString}`;
    }

    return numString;
  }
}
