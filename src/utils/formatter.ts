import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { ptBR } from "date-fns/locale/pt-BR";

export function dateFormatterRelativeToNow(date: Date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })
}