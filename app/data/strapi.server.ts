import { json } from '@remix-run/node';
import { checkEnvVars, checkStatus } from '~/utils/errorHandling';

export async function Aboutme() {
  try {
    checkEnvVars();
    const response = await fetch(
      `${process.env.STRAPI_URL_BASE}/api/about-me`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          //'Content-Type': 'application/json',
        },
      }
    );

    checkStatus(response); // check the status

    const data = await response.json(); // get the json response

    if (data.error) {
      // error check
      throw new Response('Error loading data', { status: 500 });
    }

    const aboutme = data.data.attributes;
    //console.log(data.data.attributes);

    // console.log(aboutme);
    return aboutme;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getSkills() {
  try {
    checkEnvVars();
    const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/skills`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        //'Content-Type': 'application/json',
      },
    });

    checkStatus(response); // check the status

    const data = await response.json(); // get the json response

    if (data.error) {
      // error check
      throw new Response('Error loading data', { status: 500 });
    }

    // console.log(data.data);
    const skills = data.data;
    //console.log(data.data.attributes);

    // console.log(skills);
    return skills;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getEducation() {
  try {
    checkEnvVars();
    const response = await fetch(
      `${process.env.STRAPI_URL_BASE}/api/educations`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          //'Content-Type': 'application/json',
        },
      }
    );

    checkStatus(response); // check the status

    const data = await response.json(); // get the json response

    if (data.error) {
      // error check
      throw new Response('Error loading data', { status: 500 });
    }

    // console.log(data.data);
    const edu = data.data;
    //console.log(data.data.attributes);

    // console.log(skills);
    return edu;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getData() {
  const aboutMeData = await Aboutme();
  const skillsData = await getSkills();
  const edu = await getEducation();
  const api = { aboutMeData, skillsData, edu };
  return await api;
}

export async function fetchData() {
  try {
    const data = await getData();
    return data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
  }
}
