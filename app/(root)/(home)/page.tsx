import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filters from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/shared/home/HomeFilters";
import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: 1,
    title: "Cascading Deletes in SQL",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "sql" },
    ],
    author: "John Doe",
    upvotes: 93914912941,
    views: 5435241,
    answers: [],
    createdAt: "2023-10-10T12:00:00.000Z",
  },
  {
    _id: 2,
    title: "How to center a div",
    tags: [
      { _id: 1, name: "html" },
      { _id: 2, name: "ccs" },
    ],
    author: "John Doe",
    upvotes: 321,
    views: 50,
    answers: [],
    createdAt: "2023-10-11T08:20:00.000Z",
  }
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className="flex-between mt-11 gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => <QuestionCard key={question._id} _id={question._id} title={question.title} tags={question.tags} author={question.author} upvotes={question.upvotes} views={question.views} answer={question.answers} createdAt={question.createdAt} />)
        ) : (
          <NoResults
            title="There are no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
