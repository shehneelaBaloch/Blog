export async function GET() {
    return Response.json([
      { id: "1", title: "First Blog Post", excerpt: "This is the first post." },
      { id: "2", title: "Second Blog Post", excerpt: "This is the second post." },
    ]);
  }
  