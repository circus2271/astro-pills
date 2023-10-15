export const prerender = false;

export async function GET({ params, request }) {
    const url = new URL(request.url)
    const queryParams = url.searchParams
    const pillName = queryParams.get('pillName')

    try { 
        const apiUrl = `https://eservice.gu.spb.ru/portalFront/proxy/async?filter=${pillName}&operation=getMedicament`
        const result = await fetch(apiUrl)
        const data = await result.json()

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(error) {
        return new Response(JSON.stringify(error), {
            status: 400,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}