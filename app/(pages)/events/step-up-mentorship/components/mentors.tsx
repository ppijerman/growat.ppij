'use client';
import * as React from 'react';
import Image from 'next/image';
import { MentorsList } from '@/public/assets/stepUpMentors/mentors';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MentorsCarousel() {

	return (
		<div>
			<div className="flex flex-col bg-ga-light-green">
				<h1 className="pl-5 text-3xl lg:text-5xl text-white font-bold pt-5 md:pt-10">
					Our Mentors
				</h1>
				<div className='flex flex-wrap items-center justify-center overflow-y-auto gap-2 sm:gap-4 md:gap-5 m-5 md:m-10  max-h-98 md:max-h-120 bg-ga-green/15 rounded-2xl'>
					{MentorsList.map((mentor, index) => (
													<Card key={index} className="flex flex-col items-center my-2 bg-transparent border-0 shadow-none h-66 sm:h-73 md:h-85 max-w-35 md:max-w-60">
														<CardHeader className="flex justify-center shadow-none px-2 py-0 md:py-4">
															<Image
																src={mentor.image}
																alt={mentor.name}
																className="w-32 h-32 md:w-48 md:h-48 rounded-full object-contain object-top drop-shadow-lg"
																width={240}
																height={240}
																priority
															/>
														</CardHeader>
														<CardContent className="px-1 text-white bg-transparent">
															<CardTitle className="text-lg md:text-xl font-bold">
																{mentor.name}
															</CardTitle>
															<p className="text-sm md:text-lg">{mentor.title}</p>
														</CardContent>
													</Card>
											))}
				</div>
			
			</div>
		</div>
	);
}
