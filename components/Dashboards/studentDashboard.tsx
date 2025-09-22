"use client";

import React, { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ------------------ Sample Data ------------------
const mentors = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Mentor ${i + 1}`,
    role:
        i % 2 === 0
            ? "Software Engineer @ Google"
            : "Product Manager @ Microsoft",
    avatarUrl: `https://i.pravatar.cc/150?u=${i + 1}`,
    expertise:
        i % 2 === 0
            ? ["React", "AI", "System Design"]
            : ["Leadership", "Strategy", "Product Roadmaps"],
    bio: `Mentor ${i + 1} has over ${5 + i} years of industry experience mentoring students and professionals.`,
    experience: `${3 + i} years at top companies including Google, Microsoft, and startups.`,
    education:
        i % 2 === 0
            ? "M.Tech in Computer Science, IIT Delhi"
            : "MBA, IIM Bangalore",
    linkedin: "https://linkedin.com/in/example",
    email: `mentor${i + 1}@example.com`,
}));

const events = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    date: `Nov ${10 + i}, 2025`,
    location: i % 2 === 0 ? "Main Auditorium" : "Virtual",
    type: i % 2 === 0 ? "In-person" : "Virtual",
}));

const internships = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Internship ${i + 1}`,
    company: i % 2 === 0 ? "TechSolutions Inc." : "Data Insights Co.",
    location: i % 2 === 0 ? "Remote" : "Bengaluru",
}));

const notices = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    text: `University Notice ${i + 1}: Please check the portal for details.`,
    category: i % 2 === 0 ? "Exams" : "Career",
}));

// ------------------ Reusable List Wrapper ------------------
const useExpandableList = (items: any[], defaultVisible = 5) => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? items : items.slice(0, defaultVisible);
    return { visibleItems, showAll, setShowAll };
};

// ------------------ Mentor Profile Modal ------------------
const MentorProfileCard = ({
    mentor,
    onClose,
}: {
    mentor: any;
    onClose: () => void;
}) => {
    if (!mentor) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <Card className="w-full max-w-lg relative">
                <CardHeader>
                    <CardTitle>{mentor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={mentor.avatarUrl}
                            alt={mentor.name}
                            className="w-20 h-20 rounded-full"
                        />
                        <div>
                            <p className="font-semibold">{mentor.role}</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {mentor.expertise.map((tag: string, i: number) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{mentor.bio}</p>
                    <p className="text-sm">
                        <strong>Experience:</strong> {mentor.experience}
                    </p>
                    <p className="text-sm">
                        <strong>Education:</strong> {mentor.education}
                    </p>

                    <div className="mt-4 space-y-2">
                        <a
                            href={mentor.linkedin}
                            target="_blank"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            LinkedIn Profile
                        </a>
                        <p className="text-sm text-gray-600">Email: {mentor.email}</p>
                    </div>
                </CardContent>
                <div className="flex justify-end gap-2 p-4">
                    <Button variant="outline" size="sm" onClick={onClose}>
                        Close
                    </Button>
                    <Button size="sm">Request Mentorship</Button>
                </div>
            </Card>
        </div>
    );
};

// ------------------ Sections ------------------
const RecommendedMentors = () => {
    const { visibleItems, showAll, setShowAll } = useExpandableList(mentors);
    const [selectedMentor, setSelectedMentor] = useState<any | null>(null);
    const [requestedMentors, setRequestedMentors] = useState<Set<number>>(
        new Set()
    );

    const toggleRequest = (id: number) => {
        const newSet = new Set(requestedMentors);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setRequestedMentors(newSet);
    };

    return (
        <Card id="mentors">
            <CardHeader>
                <CardTitle>Recommended Mentors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {visibleItems.map((m) => (
                    <div
                        key={m.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition"
                    >
                        <div className="flex items-center">
                            <img
                                src={m.avatarUrl}
                                alt={m.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">{m.name}</p>
                                <p className="text-sm text-muted-foreground">{m.role}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedMentor(m)}
                            >
                                View Profile
                            </Button>
                            <Button
                                size="sm"
                                onClick={() => toggleRequest(m.id)}
                                className={
                                    requestedMentors.has(m.id) ? "bg-red-500 hover:bg-red-600" : ""
                                }
                            >
                                {requestedMentors.has(m.id) ? "Cancel" : "Request"}
                            </Button>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "View Less" : "View More"}
                    </Button>
                </div>
            </CardContent>

            {selectedMentor && (
                <MentorProfileCard
                    mentor={selectedMentor}
                    onClose={() => setSelectedMentor(null)}
                />
            )}
        </Card>
    );
};

const UpcomingEvents = () => {
    const { visibleItems, showAll, setShowAll } = useExpandableList(events);

    return (
        <Card id="events">
            <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {visibleItems.map((e) => (
                        <li
                            key={e.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between"
                        >
                            <div>
                                <p className="font-semibold">{e.title}</p>
                                <p className="text-sm text-muted-foreground">
                                    {e.date} · {e.location}
                                </p>
                            </div>
                            <span
                                className={`mt-2 sm:mt-0 text-xs px-2 py-1 rounded-full ${e.type === "Virtual"
                                        ? "bg-blue-100 text-blue-600"
                                        : "bg-green-100 text-green-600"
                                    }`}
                            >
                                {e.type}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center mt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "View Less" : "View More"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const InternshipBoard = () => {
    const { visibleItems, showAll, setShowAll } = useExpandableList(internships);

    return (
        <Card id="internships">
            <CardHeader>
                <CardTitle>Internships</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {visibleItems.map((i) => (
                        <li
                            key={i.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between"
                        >
                            <div>
                                <p className="font-semibold">{i.title}</p>
                                <p className="text-sm text-muted-foreground">
                                    {i.company} · {i.location}
                                </p>
                            </div>
                            <Button variant="link" size="sm" className="mt-2 sm:mt-0">
                                Apply
                            </Button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center mt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "View Less" : "View More"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const UniversityBoard = () => {
    const { visibleItems, showAll, setShowAll } = useExpandableList(notices);

    return (
        <Card id="board">
            <CardHeader>
                <CardTitle>University Board</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {visibleItems.map((n) => (
                        <li
                            key={n.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between"
                        >
                            <p>{n.text}</p>
                            {n.category && (
                                <span className="mt-2 sm:mt-0 text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                                    {n.category}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center mt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "View Less" : "View More"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

// ------------------ Main Dashboard ------------------
const StudentDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <div className="bg-background min-h-screen">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur shadow px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold text-primary">
                    Student Dashboard
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-sm font-medium text-muted-foreground">
                    <button onClick={() => scrollToSection("mentors")}>Mentors</button>
                    <button onClick={() => scrollToSection("events")}>Events</button>
                    <button onClick={() => scrollToSection("internships")}>Internships</button>
                    <button onClick={() => scrollToSection("board")}>Board</button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded-md border"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-card border-t px-6 py-4 space-y-3">
                    <button onClick={() => scrollToSection("mentors")}>Mentors</button>
                    <button onClick={() => scrollToSection("events")}>Events</button>
                    <button onClick={() => scrollToSection("internships")}>
                        Internships
                    </button>
                    <button onClick={() => scrollToSection("board")}>Board</button>
                </div>
            )}

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                    <RecommendedMentors />
                    <InternshipBoard />
                </div>
                <div className="space-y-6 sm:space-y-8">
                    <UpcomingEvents />
                    <UniversityBoard />
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
