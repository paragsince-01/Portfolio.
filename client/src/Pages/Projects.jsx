import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Clg from "../images/clg.jpeg";
import travel from "../images/travel.jpeg";
import barber from "../images/barber.jpeg";
import car from "../images/car.jpeg";
import ecom from "../images/ecom.jpeg";
import todo from "../images/todo.jpeg";
import blog from "../images/blog.jpeg";
import CallToAction from "../Component/CallToAction.jsx";
import Footer from "../Component/Footer.jsx";

export default function Projects() {
  return (
    <>
      <section className="w-full h-full">
        <div className="h-full flex flex-col justify-center items-center p-40 gap-4 bg-gray-200 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-gray-800 bounce">
            Projects
          </h1>
          <span className="my-2 self-center w-80 md:w-40 border-b-2 border-orange-400"></span>
        </div>
        {/* -------cards------- */}
        <div className="flex flex-wrap p-10 gap-10 justify-center items-center">
          <Card className="mt-6 w-96 border  cursor-pointer hover:shadow-md hover:shadow-orange-500">
            <CardHeader color="blue-gray" className="relative h-56 ">
              <img src={Clg} className="img w-full h-full" alt="Card Image" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-semibold font-link text-gray-800"
              >
                Eduford University
              </Typography>
              <Typography className="font-link text-gray-800 text-lg">
              Eduford University, crafted with HTML, CSS, and JavaScript, offers an immersive online education experience. Our responsive and intuitive design ensures seamless navigation, fostering a dynamic learning environment for students.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
    <Button className="font-link tracking-wider">Read More</Button>
  </CardFooter> */}
          </Card>

          {/* ------------2-------- */}
          <Card className="mt-6 w-96 border  cursor-pointer hover:shadow-md hover:shadow-orange-500">
            <CardHeader color="blue-gray" className="relative h-56 ">
              <img
                src={travel}
                className="img w-full h-full"
                alt="Card Image"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-semibold font-link text-gray-800"
              >
                TripTok Flight Booking
              </Typography>
              <Typography className="font-link text-gray-800 text-lg">
              TripTok Flight Booking, powered by HTML, CSS, and JavaScript, provides an easy-to-use interface for seamless flight reservations. Responsive design and intuitive features enhance the user experience, making travel planning efficient.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
    <Button className="font-link tracking-widest">Read More</Button>
  </CardFooter> */}
          </Card>
          {/* ------------3---------- */}
          <Card className="mt-6 w-96 border  cursor-pointer hover:shadow-md hover:shadow-orange-500">
            <CardHeader color="blue-gray" className="relative h-56 ">
              <img
                src={barber}
                className="img w-full h-full "
                alt="Card Image"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-semibold font-link text-gray-800"
              >
                Barber Hair Saloon
              </Typography>
              <Typography className="font-link text-gray-800 text-lg">
              Barber Haven, a stylish hair salon website coded with HTML, CSS, and JavaScript, offers a modern experience. Book appointments, explore services, and enjoy a responsive design for a seamless user journey.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
    <Button className="font-link tracking-wider">Read More</Button>
  </CardFooter> */}
          </Card>

          {/* ------------4---------- */}
          <Card className="mt-6 w-96 border  cursor-pointer hover:shadow-md hover:shadow-orange-500">
            <CardHeader color="blue-gray" className="relative h-56 ">
              <img src={car} className="img w-full h-full " alt="Card Image" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-semibold font-link text-gray-800"
              >
                Borrow Car Rental
              </Typography>
              <Typography className="font-link text-gray-800 text-lg">
              Borrow, a user-friendly car rental platform, is crafted with HTML, CSS, and JavaScript. Experience seamless vehicle bookings, explore options, and enjoy responsive design for convenient and efficient online rentals.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
    <Button className="font-link tracking-wider">Read More</Button>
  </CardFooter> */}
          </Card>

          {/* ------------5---------- */}
          <Card className="mt-6 w-96 border  cursor-pointer hover:shadow-md hover:shadow-orange-500">
            <CardHeader color="blue-gray" className="relative h-56 ">
              <img src={ecom} className="img w-full h-full " alt="Card Image" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-semibold font-link text-gray-800"
              >
                Cara Clothing E-com.
              </Typography>
              <Typography className="font-link text-gray-800 text-lg">
              Cara Couture, an elegant MERN-based clothing e-commerce site, delivers a seamless shopping experience. Explore a diverse collection, effortless navigation, and secure transactions, ensuring a stylish and user-friendly online fashion destination.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
    <Button className="font-link tracking-wider">Read More</Button>
  </CardFooter> */}
          </Card>

          {/* ------------6---------- */}
          <Card className="mt-6 w-96 border  cursor-pointer hover:shadow-md hover:shadow-orange-500">
            <CardHeader color="blue-gray" className="relative h-56 ">
              <img src={todo} className="img w-full h-full " alt="Card Image" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-semibold font-link text-gray-800"
              >
                Task Managment Web Page
              </Typography>
              <Typography className="font-link text-gray-800  text-lg">
              TaskMate, a sleek task management app crafted with HTML, CSS, and JavaScript, ensures an organized workflow. With intuitive design and responsive features, efficiently manage and prioritize tasks for productivity.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
    <Button className="font-link tracking-wider">Read More</Button>
  </CardFooter> */}
          </Card>

          {/* ------------7---------- */}
          <Card className="mt-6 w-96 border cursor-pointer hover:shadow-md hover:shadow-orange-500">
            <CardHeader
              color="blue-gray"
              className="relative h-56 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <img src={blog} className="img w-full h-full " alt="Card Image" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-semibold font-link text-gray-800"
              >
                Parag's Blog
              </Typography>
              <Typography className="font-link text-gray-800 text-lg">
              Parag'sBlog, a dynamic MERN-based blog website, integrates an admin control block for easy management. Crafted with HTML, CSS, and JavaScript, it combines elegant design with robust functionality, offering seamless content creation and administration. Explore articles, engage with readers, and maintain full control over your blogging platform.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
    <Button className="font-link tracking-wider">Read More</Button>
  </CardFooter> */}
          </Card>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}
