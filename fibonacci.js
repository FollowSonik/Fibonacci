function fibonacci(n) {
  const Fib = [n + 1]
  Fib[0] = 0
  Fib[1] = 1

  for (let i = 2; i <= n; i++) {
    Fib[i] = Fib[i - 1] + Fib[i - 2]
  }

  return Fib[n]
}

function main() {
  for (let n = 1; n < 50; n++) {
    const result = fibonacci(n)
    console.log(`The result ${result}.`)
  }
}

main()