import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2, MoreHorizontal, ImageIcon, Video } from "lucide-react"

const feedPosts = [
  {
    id: 1,
    author: "Sarah Johnson",
    batch: "2017",
    avatar: "/professional-woman-diverse.png",
    role: "Product Manager at Google",
    timestamp: "2 hours ago",
    content:
      "Just wrapped up an amazing product launch! Our team worked incredibly hard to bring this vision to life. Grateful for the problem-solving skills I learned during my computer science program. 🚀",
    likes: 24,
    comments: 8,
    shares: 3,
    type: "success_story",
  },
  {
    id: 2,
    author: "Michael Chen",
    batch: "2019",
    avatar: "/professional-man.png",
    role: "Data Scientist at Meta",
    timestamp: "5 hours ago",
    content:
      "Excited to share that I'll be speaking at the upcoming AI Conference next month! The topic: 'Ethical AI in Social Media'. Would love to see fellow alumni there. Let me know if you're attending!",
    likes: 31,
    comments: 12,
    shares: 7,
    type: "announcement",
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    batch: "2016",
    avatar: "/professional-woman-designer.png",
    role: "UX Designer at Apple",
    timestamp: "1 day ago",
    content:
      "Shoutout to my amazing mentor, Professor Williams, who taught me the fundamentals of design thinking. Your guidance continues to shape my career every day. Thank you! 🙏",
    likes: 45,
    comments: 15,
    shares: 5,
    type: "shoutout",
  },
  {
    id: 4,
    author: "David Kim",
    batch: "2020",
    avatar: "/professional-engineer.png",
    role: "Software Engineer at Stripe",
    timestamp: "2 days ago",
    content:
      "Looking for recommendations for the best online courses for machine learning. Planning to transition into ML engineering. Any suggestions from the community?",
    likes: 18,
    comments: 22,
    shares: 2,
    type: "question",
  },
]

export default function CommunityFeedSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Community Feed</h1>
        <Button>Create Post</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Create Post */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Share with the community</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="/professional-headshot.png" alt="Your avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="Share your success story, ask a question, or give a shoutout..."
                  className="min-h-[100px] resize-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Photo
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Video className="h-4 w-4" />
                  Video
                </Button>
              </div>
              <Button>Post</Button>
            </div>
          </CardContent>
        </Card>

        {/* Community Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Community Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1,247</div>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Posts this week</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Success stories</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Questions answered</span>
                <span className="font-semibold">15</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feed Posts */}
        <div className="lg:col-span-3 space-y-4">
          {feedPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                      <AvatarFallback>
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{post.author}</h4>
                        <Badge variant="outline" className="text-xs">
                          Class of {post.batch}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            post.type === "success_story"
                              ? "bg-green-100 text-green-800"
                              : post.type === "announcement"
                                ? "bg-blue-100 text-blue-800"
                                : post.type === "shoutout"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {post.type.replace("_", " ")}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{post.role}</p>
                      <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{post.content}</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex gap-6">
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                      <Share2 className="h-4 w-4" />
                      {post.shares}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
