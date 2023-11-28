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

    const attributes = data.data.attributes;

    const aboutme = {
      name: attributes.name,
      dob: attributes.dob,
      phone: attributes.phone,
      email: attributes.email,
      description: attributes.description,
    };

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

    const SkillData = data.data.map(
      (item: { id: any; attributes: { title: string; percent: number } }) => {
        const id = item.id;
        const { title, percent } = item.attributes;
        return { id, title, percent };
      }
    );

    // console.log(skills);
    return SkillData;
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

    const educationData = data.data.map(
      (item: {
        id: any;
        attributes: { title: any; institute: any; dateCompleted: any };
      }) => {
        const id = item.id;
        const { title, institute, dateCompleted } = item.attributes;
        return { id, title, institute, dateCompleted };
      }
    );

    //console.log(data.data.attributes);

    // console.log(edu);
    return educationData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getWork() {
  try {
    checkEnvVars();
    const response = await fetch(
      `${process.env.STRAPI_URL_BASE}/api/experiences`,
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

    const WorkData = data.data.map(
      (item: {
        id: any;
        attributes: {
          title: any;
          description: any;
          fromDate: any;
          toDate: any;
          company: any;
          isCurrent: any;
        };
      }) => {
        const id = item.id;
        const { Title, description, fromDate, toDate, company, isCurrent } =
          item.attributes;
        return { id, Title, description, fromDate, toDate, company, isCurrent };
      }
    );

    //console.log(data.data.attributes);

    // console.log(skills);
    return WorkData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getData() {
  const aboutme = await Aboutme();
  const skills = await getSkills();
  const education = await getEducation();
  const experiences = await getWork();
  const api = { aboutme, skills, experiences, education };
  return json(api);
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
