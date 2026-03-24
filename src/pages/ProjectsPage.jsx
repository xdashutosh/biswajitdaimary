import { useNavigate } from 'react-router-dom';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Search, Filter, ChevronLeft, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
// Original Assets
import projectsData from '../data/projects.json';
import SEO from '../components/SEO';
import { useState, useMemo } from 'react';

// Assets
import project_img from '../assets/projectimg2.png';

const ProjectsPage = () => {
    const navigate = useNavigate();
    const containerRef = useScrollRevealChildren();
    
    const [activeTab, setActiveTab] = useState('All'); // 'All', 'Running', 'Completed'
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 12;

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const name = (project.name || '').toLowerCase();
            const head = (project.head || '').toLowerCase();
            const searchTermLower = searchTerm.toLowerCase();

            const matchesSearch = name.includes(searchTermLower) || head.includes(searchTermLower);

            let matchesTab = false;
            if (activeTab === 'All') {
                matchesTab = true;
            } else if (activeTab === 'Running' || activeTab === 'Completed') {
                matchesTab = project.status === activeTab;
            } else if (activeTab === 'Roads') {
                const roadKeywords = ['road', 'path', 'renewal', 'paki path', 'hpc', 'icbp'];
                const roadHeads = ['ridf', 'sopd', 'mmppna', 'mmpna', 'mmuppna', 'asom mala', 'mmupna', 'sopd-ods', 'pwd'];
                matchesTab = roadKeywords.some(key => name.includes(key)) || 
                             roadHeads.some(h => head.includes(h));
            } else if (activeTab === 'Bridges') {
                const bridgeKeywords = ['bridge', 'culvert', 'br.', 'span'];
                matchesTab = bridgeKeywords.some(key => name.includes(key));
            } else if (activeTab === 'Common Cause') {
                const commonCauseKeywords = ['community hall', 'auditorium', 'stadium', 'bhawan', 'mandir', 'church', 'masjid', 'cemetery', 'cremation', 'cultural', 'financial assistance', 'grant', 'relief', 'donation', 'assistance', 'awc', 'anganwadi', 'mahaprabhu', 'jagannath'];
                const commonCauseHeads = ['tea tribes', 'social welfare', 'wpt & bc', 'handloom & textile', 'assam darshan', 'mla - ad', 'cmrf', 'sports', 'youth', 'gad'];
                matchesTab = commonCauseKeywords.some(key => name.includes(key)) || 
                             commonCauseHeads.some(h => head.includes(h));
            }

            return matchesSearch && matchesTab;
        });
    }, [searchTerm, activeTab]);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const currentProjects = filteredProjects.slice(
        (currentPage - 1) * projectsPerPage,
        currentPage * projectsPerPage
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Impact & Development Projects in BTR & Assam"
                description="Explore over 1100 developmental projects and schemes led by Biswajit Daimary, honorable Speaker of the Assam Legislative Assembly. Browse running and completed projects in infrastructure, water, and more across the Bodoland Territorial Region (BTR) and Assam."
                keywords="BTR Development Projects, Biswajit Daimary Initiatives, Infrastructure in Assam, BTR Progress, Panery Constituency Projects, Assam Legislative Assembly Speaker Schemes, Rural Development, Water Schemes, Road Construction Assam"
                url="/projects"
            />
            <section className="bg-primary-dark py-3 md:py-5 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project_img}
                        alt="BTR Development Projects"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/55"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-primary-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
                            Global Vision | Local Impact
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif text-white leading-[1.15] mb-6 drop-shadow-xl uppercase">
                            Impact & Development
                        </h1>
                        <div className="flex items-center justify-center space-x-4 mb-2">
                            <div className="w-8 md:w-12 h-1 bg-primary-orange shadow-lg"></div>
                            <p className="text-primary-orange font-normal tracking-[0.3em] text-[10px] md:text-xs uppercase font-serif">A Vision for BTR</p>
                            <div className="w-8 md:w-12 h-1 bg-primary-orange shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Tabs */}
                        <div className="flex bg-white p-1.5 rounded-full shadow-xl border border-gray-100 w-full md:w-auto overflow-x-auto no-scrollbar">
                            {['All', 'Running', 'Completed', 'Roads', 'Bridges', 'Common Cause'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                                    className={`px-4 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                                        activeTab === tab 
                                        ? 'bg-primary-dark text-white shadow-lg scale-105' 
                                        : 'text-gray-400 hover:text-primary-dark hover:bg-gray-50'
                                    }`}
                                >
                                    {tab === 'Completed' ? 'Done' : 
                                     tab === 'Running' ? 'Running' : 
                                     tab === 'Roads' ? 'Roads' : 
                                     tab === 'Bridges' ? 'Bridges' : 
                                     tab === 'Common Cause' ? 'Common Cause' : 
                                     'All'}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-64 group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary-orange transition-colors" />
                            <input
                                type="text"
                                placeholder="Find schemes or departments..."
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-full focus:outline-none focus:ring-4 focus:ring-primary-orange/5 focus:border-primary-orange/30 transition-all shadow-xl text-xs font-bold uppercase tracking-widest placeholder:text-gray-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    {currentProjects.length > 0 ? (
                        <>
                            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {currentProjects.map((proj, idx) => (
                                    <div
                                        key={proj.id}
                                        onClick={() => navigate(`/projects/${proj.id}`)}
                                        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                    >

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className={`p-2 rounded-lg ${proj.status === 'Completed' ? 'bg-green-50' : 'bg-blue-50'}`}>
                                                    {proj.status === 'Completed' ? (
                                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                    ) : (
                                                        <Clock className="w-5 h-5 text-blue-600" />
                                                    )}
                                                </div>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                                                    proj.status === 'Completed' 
                                                    ? 'bg-green-100 text-green-700' 
                                                    : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                    {proj.status === 'Completed' ? 'Completed' : 'Running'}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-base md:text-lg font-normal font-serif text-primary-dark mb-2 line-clamp-3 min-h-[4.5rem] leading-[1.3] group-hover:text-primary-orange transition-colors italic">
                                                "{proj.name}"
                                            </h3>
                                            
                                            <div className="mt-auto space-y-3">
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                                    <span className="text-[10px] text-gray-400 uppercase font-black">Investment</span>
                                                    <span className="text-primary-orange font-black text-sm">{proj.cost}</span>
                                                </div>
                                                <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl">
                                                    <Filter className="w-3 h-3 text-gray-400 mt-0.5" />
                                                    <p className="text-[11px] text-gray-500 font-medium leading-normal italic line-clamp-2">
                                                        {proj.head}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary-orange hover:border-primary-orange disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all shadow-sm"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-gray-400">Page</span>
                                        <span className="w-10 h-10 flex items-center justify-center bg-primary-orange text-white rounded-xl font-bold shadow-lg">
                                            {currentPage}
                                        </span>
                                        <span className="text-sm font-bold text-gray-400">of {totalPages}</span>
                                    </div>

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary-orange hover:border-primary-orange disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all shadow-sm"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                            <button 
                                onClick={() => { setSearchTerm(''); setActiveTab('All'); }}
                                className="mt-6 text-primary-orange font-bold uppercase tracking-widest text-sm hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
