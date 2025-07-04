// Simple in-memory storage for demo purposes
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'manager' },
];

export function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  
  if (id) {
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
    return Response.json({ user, timestamp: new Date().toISOString() });
  }
  
  return Response.json({ 
    users, 
    count: users.length,
    timestamp: new Date().toISOString() 
  });
}

export function POST(request: Request) {
  try {
    // In a real app, you'd parse the request body
    const newUser = {
      id: Math.max(...users.map(u => u.id)) + 1,
      name: 'New User',
      email: 'newuser@example.com',
      role: 'developer'
    };
    
    users.push(newUser);
    
    return Response.json({ 
      message: 'User created successfully',
      user: newUser,
      totalUsers: users.length,
      timestamp: new Date().toISOString() 
    }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create user' }, { status: 400 });
  }
}

export function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  
  if (!id) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }
  
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  
  return Response.json({ 
    message: 'User deleted successfully',
    deletedUser,
    remainingUsers: users.length,
    timestamp: new Date().toISOString() 
  });
} 