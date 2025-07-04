export function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'world';
  
  return Response.json({ 
    hello: name,
    message: `Hello, ${name}! Welcome to the API.`,
    timestamp: new Date().toISOString(),
    method: 'GET'
  });
}

export function POST(request: Request) {
  return Response.json({ 
    hello: 'POST request received',
    message: 'This is a POST endpoint response',
    timestamp: new Date().toISOString(),
    method: 'POST',
    success: true
  });
}
  