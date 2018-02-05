defmodule Calc do
  @moduledoc """
  Documentation for Calc.
  """

  def main() do
    result = IO.gets("> ") |> eval()
    IO.puts("#{result}")
    main()
  end

  def eval(str) do
    String.replace(str, "(", "( ")
    |> String.replace(")", " )")
    |> String.split()
    |> Enum.join()
    |> String.replace("+", " + ")
    |> String.replace("-", " - ")
    |> String.replace("*", " * ")
    |> String.replace("/", " / ")
    |> String.split()
    |> eval_expr()
  end

  def eval_expr(["(", n | rest]) do
    eval_parens(Enum.concat(["(", n], rest))
  end
  def eval_expr([n, "+" | rest]) do
    eval_expr(n) + eval_expr(rest)
  end
  def eval_expr([n, "-" | rest]) do
    eval_expr(n) - eval_expr(rest)
  end
  def eval_expr([n, "*" | rest]) do
    eval_expr(n) * eval_expr(rest)
  end
  def eval_expr([n, "/" | rest]) do
    eval_expr(n) / eval_expr(rest)
  end
  def eval_expr([n]), do: String.to_integer(n)
  def eval_expr(n), do: String.to_integer(n)

  def eval_parens(expr) do
    Enum.join(expr)
    # finds parentheses groups using a regex
    parenMatches = Regex.scan(~r/\(([^()]|(?R))*\)/, expr)

    Enum.each(parenMatches, fn(m) ->
      [outer | rest] = m

      # evaluates each parentheses group
      Enum.each(rest, fn(g) ->
        stripParens = String.slice(g, 1..String.length(g) - 2)
        eval(stripParens)
      end)
    end)
  end
end
