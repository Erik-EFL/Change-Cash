export default class Helpers {
  static formateIniciais = (nome: string) => {
    return nome.charAt(0).toUpperCase() + nome.slice(1)
  }

  static formatDate(info: string) {
    if (!info) return 'DD/MM/AA';
    if (info) {
      const date = new Date(info);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const dia = day < Number('10') ? `0${day}` : day;

      const dateFormatted = `${dia}/${month}/${year}`;
      return dateFormatted;
    }
  }

  static formatAmount(price: number) {
    const num = Number(price);
    const priceFormatted = num
      ? num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      : 'R$ 0,00';
    return priceFormatted;
  }

  static convertNumbers(number: number) {
    if (!number) return '0000';
    if (number < Number('10')) {
      return `000${number}`;
    }
    if (number >= Number('10')) {
      return `00${number}`;
    }
    if (number >= Number('100')) {
      return `0${number}`;
    }
    if (number >= Number('1000')) {
      return number;
    }
    return !number && '0000';
  }
}
