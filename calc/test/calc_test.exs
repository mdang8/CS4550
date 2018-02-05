defmodule CalcTest do
  use ExUnit.Case
  doctest Calc

  test "addition" do
    assert Calc.eval("2 + 3") == 5
    assert Calc.eval("0 + 0") == 0
    assert Calc.eval("0 + 10 + 5 + 3") == 18
  end

  test "substitution" do
    assert Calc.eval("3 - 2") == 1
    assert Calc.eval("0 - 0") == 0
    assert Calc.eval("20 - 4 - 0") == 16
    assert Calc.eval("30 - 50") == -20
  end

  test "multiplication" do
    assert Calc.eval("2 * 3") == 6
    assert Calc.eval("0 * 0") == 0
    assert Calc.eval("10 * 4 * 2") == 80
  end

  test "division" do
    assert Calc.eval("6 / 2") == 3.0
    assert Calc.eval("0 / 4") == 0.0
    assert Calc.eval("20 / 2 / 1") == 10
  end
end
