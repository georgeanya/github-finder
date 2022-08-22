import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
