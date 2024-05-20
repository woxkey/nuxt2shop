export default function ({ route, redirect }) {
  if (route.path === '/') {
    redirect('/products/all')
  }
}
