"use client";
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react'
import Spinner from './Spinner';
import { CalendarDays, Ticket } from 'lucide-react';
import EventCard from './EventCard';
import sampleData from '@/convex/sampleData.json';

function EventList() {
    const events = useQuery(api.events.get)

    if (!events) {
        return (
          <div className="min-h-[400px] flex items-center justify-center">
            <Spinner />
          </div>
        );
      }

  // Use sample data if no real events exist to make homepage feel alive
  const displayEvents = events.length === 0 ? sampleData : events;
  
  // Ensure displayEvents is an array before filtering
  const eventsArray = Array.isArray(displayEvents) ? displayEvents : [];
  
  const upcomingEvents = eventsArray
    .filter((event) => event.eventDate > Date.now())
    .sort((a, b) => a.eventDate - b.eventDate);

  const pastEvents = eventsArray
    .filter((event) => event.eventDate <= Date.now())
    .sort((a, b) => b.eventDate - a.eventDate);

      
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Upcoming Events</h1>
          <p className="mt-2 text-muted-foreground">
            Discover & book tickets for amazing events
          </p>
        </div>
        <div className="bg-card px-4 py-2 rounded-lg shadow-sm border border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="w-5 h-5" />
            <span className="font-medium">
              {upcomingEvents.length} Upcoming Events
            </span>
          </div>
        </div>
      </div>

       {/* Upcoming Events Grid */}
       {upcomingEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event._id || `sample-upcoming-${index}`} eventId={event._id} event={event} />
          ))}
        </div>
      ) : (
        <div className="bg-muted/50 rounded-lg p-12 text-center mb-12">
          <Ticket className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-card-foreground">
            No upcoming events
          </h3>
          <p className="text-muted-foreground mt-1">Check back later for new events</p>
        </div>
      )}

      {pastEvents.length > 0 && (
        <>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard key={event._id || `sample-past-${index}`} eventId={event._id} event={event} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default EventList
