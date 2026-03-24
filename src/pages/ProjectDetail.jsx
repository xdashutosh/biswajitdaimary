import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, IndianRupee, Droplets, Building2, Construction, Factory, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import projectsData from '../data/projects.json';
import rural_water_scheme from '../assets/rural_water_scheme.png';
import project_img_2 from '../assets/projectimg2.png';

const getProjectTheme = (name) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('water') || lowercaseName.includes('pkhuri') || lowercaseName.includes('drain') || lowercaseName.includes('phe') || lowercaseName.includes('jjm') || lowercaseName.includes('irrigation')) {
        return {
            category: 'Water & Rural Security',
            image: rural_water_scheme,
            icon: Droplets,
            color: 'blue'
        };
    }
    if (lowercaseName.includes('road') || lowercaseName.includes('paving') || lowercaseName.includes('path') || lowercaseName.includes('mala') || lowercaseName.includes('nh-') || lowercaseName.includes('bridge') || lowercaseName.includes('culvert')) {
        return {
            category: 'Roads & Connectivity',
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200',
            icon: Construction,
            color: 'orange'
        };
    }
    if (lowercaseName.includes('building') || lowercaseName.includes('school') || lowercaseName.includes('hospital') || lowercaseName.includes('assembly') || lowercaseName.includes('college') || lowercaseName.includes('office') || lowercaseName.includes('complex')) {
        return {
            category: 'Infrastructure & Governance',
            image: 'https://pbs.twimg.com/media/GUyIwXNWAAI30zv.jpg',
            icon: Building2,
            color: 'slate'
        };
    }
    return {
        category: 'Development Initiative',
        image: project_img_2,
        icon: Factory,
        color: 'orange'
    };
};

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectsData.find(p => p.id === projectId);
        if (foundProject) {
            const theme = getProjectTheme(foundProject.name);
            setProject({
                ...foundProject,
                ...theme
            });
        }
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-2xl font-serif text-primary-dark mb-4">Project Not Found</h2>
                    <button 
                        onClick={() => navigate('/projects')}
                        className="text-primary-orange font-bold uppercase tracking-widest flex items-center gap-2 mx-auto"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title={`${project.name} | Development Project`}
                description={`${project.name} - A critical development initiative under ${project.head} as part of Biswajit Daimary's vision for BTR and Assam. Fund/Scheme: ${project.head}. Project Status: ${project.status}.`}
                keywords={`${project.name}, ${project.category}, Biswajit Daimary, Assam Development, BTR Projects, ${project.head}, Infrastructure Scheme`}
                image={project.image}
                url={`/projects/${projectId}`}
            />

            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[60vh] overflow-hidden bg-primary-dark">
                <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <button 
                            onClick={() => navigate(-1)}
                            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-6 hover:bg-white hover:text-primary-dark transition-all w-fit"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <div className="flex items-center gap-3 text-primary-orange mb-4">
                            {project.icon && <project.icon className="w-5 h-5" />}
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{project.category}</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal font-serif text-white leading-[1.15] mb-4">
                            {project.name}
                        </h1>
                        <div className="w-12 h-1 bg-primary-orange/50 rounded-full mt-6"></div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-normal font-serif text-primary-dark mb-6 relative w-fit">
                                    Project Overview
                                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-orange/30 rounded-full"></div>
                                </h2>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium opacity-90">
                                    {project.name}. This is a critical development initiative under {project.head} aimed at enhancing the infrastructure and quality of life in the region.
                                </p>
                            </div>
                            
                            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                                <p className="text-gray-500 text-sm leading-relaxed italic">
                                    "{project.detail}"
                                </p>
                            </div>
                        </div>

                        {/* Sidebar / Info Card */}
                        <div className="space-y-6">
                            <div className="bg-white border border-gray-100 shadow-xl rounded-sm p-8 sticky top-24">
                                <h3 className="text-lg font-normal font-serif text-primary-dark mb-6">Key Details</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <div className="text-primary-orange font-bold text-xs">Head</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Project Head / Fund</div>
                                            <div className="text-primary-dark font-bold text-sm tracking-tight">{project.head}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IndianRupee className="w-5 h-5 text-primary-orange" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Total Amount</div>
                                            <div className="text-primary-dark font-bold text-sm">{project.cost}</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            {project.status === 'Completed' ? <CheckCircle2 className="w-5 h-5 text-primary-orange" /> : <Clock className="w-5 h-5 text-primary-orange" />}
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Status</div>
                                            <div className="text-primary-dark font-bold text-sm">{project.status}</div>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => navigate('/contact')}
                                    className="w-full mt-8 bg-primary-dark text-white py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-primary-orange transition-colors"
                                >
                                    Inquire About Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
