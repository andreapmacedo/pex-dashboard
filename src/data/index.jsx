import sales from '../assets/sales.svg';
import customers from '../assets/customers.svg';
import partners from '../assets/partners.svg';
import reports from '../assets/reports.svg';
import home from '../assets/home.svg';

export const menuElements = [
  {
    text: 'Dashboard',
    icon: home,
    focus: true,
  },
  {
    text: 'Vendas',
    icon: sales,
    focus: false,
  },
  {
    text: 'Relatórios',
    icon: reports,
    focus: false,
  },
  {
    text: 'Lojas parceiras',
    icon: partners,
    focus: false,
  },
  {
    text: 'Clientes',
    icon: customers,
    focus: false,
  },
];

export const bigBalance = [
  {
    title: 'Receita total',
    amount: 312321,
    avarage: 67.2,
    cardColor: '#EC7A7A'
  },
  {
    title: 'Lucro total',
    amount: 74421,
    avarage: 42.3,
    cardColor: '#7A85EC'
  },
  {
    title: 'Lucro por venda',
    amount: 3.12,
    avarage: 12.4,
    cardColor: '#65D4AC'
  },
];

export const smallBalance = [
  {
    title: 'Clientes ativos',
    amount: 3312,
    percent: 2.6,
    value: 12,
    format: 'noFraction'
  },
  {
    title: 'Novos clientes',
    amount: 12,
    percent: 15.3,
    value: 2,
    format: 'noFraction'
  },
  {
    title: 'Clientes adicionados',
    amount: 42,
    percent: 42.6,
    value: 8,
    format: 'noFraction'
  },
  {
    title: 'LTV',
    amount: 142.32,
    percent: -22.6,
    value: 'R$12.20',
    format: 'ptBr'
  },
  {
    title: 'Turnover',
    amount: 24.3,
    percent: 42.6,
    value: 3,
    format: 'percent',
    extraData: 32,
  },
  {
    title: 'Turnover recuperado',
    amount: 54.42,
    percent: 32.6,
    value: 6,
    format: 'percent',
    extraData: 12,
  },
];

export const midBalance = [
  {
    title: 'Cotações realizadas',
    amount: 312.321,
    percent: 15.3,
    value: 223,
  },
  {
    title: 'Vendas finalizadas',
    amount: 212.012,
    percent: 15.3,
    value: 223,
  },
  {
    title: 'Cotações não concluídas',
    amount: 42.021,
    percent: 15.3,
    value: 223,
  },
  {
    title: 'Cotações não respondidas',
    amount: 3.122,
    percent: 15.3,
    value: 223,
    extraData: '3%',
  },
];

export const tableDataA = [
  {
    club: 'Estagiários',
    customers: 312,
    value: 123.90,
  },
  {
    club: 'Diretoria',
    customers: 312,
    value: 123.90,
  },
  {
    club: 'Geral',
    customers: 312,
    value: 123.90,
  },
  {
    club: 'Almoxarifado',
    customers: 312,
    value: 123.90,
  },
];

export const tableDataB = [
  {
    club: '6 vendas',
    customers: 312,
    value: 123.90,
  },
  {
    club: '12 vendas',
    customers: 312,
    value: 123.90,
  },
  {
    club: '24 vendas',
    customers: 312,
    value: 123.90,
  },
  {
    club: 'Personalizado',
    customers: 312,
    value: 123.90,
  },
];

export const tableDataC = [
  {
    club: 'Construtoras',
    customers: 312,
    value: 123.90,
  },
  {
    club: 'Clientes finais',
    customers: 312,
    value: 123.90,
  },
];