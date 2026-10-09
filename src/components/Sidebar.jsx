import React from "react";
import { navItems, personalInfo } from "../data/portfolioData";

/**
 * Componente Sidebar:
 * - Gestiona la navegación principal de la aplicación.
 * - En pantallas de escritorio: Permite alternar entre estado expandido (250px) y colapsado (78px).
 * - En pantallas móviles (<= 760px): Se transforma en una barra fija superior con botón hamburguesa
 *   y menú desplegable que se cierra automáticamente al seleccionar cualquier sección.
 * - Muestra el indicador activo (glow naranja y barra vertical 'active-light') según la sección visible.
 *
 * @param {Object} props
 * @param {string} props.activeSection - ID de la sección actualmente visible
 * @param {Function} props.onNavigate - Callback para scroll suave a una sección específica
 * @param {boolean} props.isSidebarCollapsed - Estado colapsado en escritorio
 * @param {Function} props.setIsSidebarCollapsed - Setter para colapsar en escritorio
 * @param {boolean} props.isMobileMenuOpen - Estado abierto del menú en móvil
 * @param {Function} props.setIsMobileMenuOpen - Setter para el menú móvil
 */
export function Sidebar({
  activeSection,
  onNavigate,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) {
  /**
   * Manejador del botón colapsar / hamburguesa:
   * Determina si estamos en vista móvil o escritorio para aplicar la acción correspondiente.
   */
  const handleToggle = () => {
    if (window.innerWidth <= 760) {
      setIsMobileMenuOpen((prev) => !prev);
    } else {
      setIsSidebarCollapsed((prev) => !prev);
    }
  };

  /**
   * Manejador de clic en cada enlace del navbar:
   * Realiza el scroll suave y cierra el menú móvil si estaba desplegado.
   */
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    onNavigate(sectionId, () => {
      if (window.innerWidth <= 760) {
        setIsMobileMenuOpen(false);
      }
    });
  };

  return (
    <aside
      className={`sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}
      id="sidebar"
      aria-label="Barra lateral de navegación"
    >
      {/* Cabecera del sidebar: Marca y botón de colapso */}
      <div className="sidebar-top">
        <a
          className="brand"
          href="#inicio"
          onClick={(e) => handleLinkClick(e, "inicio")}
          aria-label="VOLCA TECH, inicio"
        >
          <img
            src="./brand/isotipo.png"
            alt="VOLCA TECH"
            className="brand-logo-img"
            width="38"
            height="38"
          />
          <span className="brand-name">
            VOLCA <span className="brand-tech">TECH</span>
          </span>
        </a>

        {/* Botón hamburguesa / colapsar con accesibilidad completa */}
        <button
          className="collapse-btn"
          id="collapseBtn"
          type="button"
          onClick={handleToggle}
          aria-label={
            window.innerWidth <= 760
              ? isMobileMenuOpen
                ? "Cerrar menú"
                : "Abrir menú"
              : isSidebarCollapsed
              ? "Mostrar menú"
              : "Ocultar menú"
          }
          aria-expanded={window.innerWidth <= 760 ? isMobileMenuOpen : !isSidebarCollapsed}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Identidad de marca en el sidebar */}
      <div className="profile-mini">
        <img
          src="./brand/isotipo.png"
          alt="VOLCA TECH"
          className="profile-avatar-img"
          width="42"
          height="42"
          aria-hidden="true"
        />
        <div className="profile-info">
          <strong>{personalInfo.brandName}</strong>
          <span>{personalInfo.role}</span>
        </div>
      </div>

      {/* Lista de enlaces de navegación principal */}
      <nav className="nav" aria-label="Navegación principal">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              className={`nav-link ${isActive ? "active" : ""}`}
              href={`#${item.id}`}
              data-section={item.id}
              onClick={(e) => handleLinkClick(e, item.id)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="nav-icon" aria-hidden="true">
                <i className={item.icon}></i>
              </span>
              <span className="nav-label">{item.label}</span>
              <span className="active-light"></span>
            </a>
          );
        })}
      </nav>

      {/* Información inferior: Disponibilidad en tiempo real y ubicación */}
      <div className="sidebar-bottom">
        <div className="availability">
          <span className="status-dot"></span>
          <span className="availability-text">{personalInfo.availabilityText}</span>
        </div>
        <div className="location">
          {personalInfo.locality} · {personalInfo.country}
        </div>
      </div>
    </aside>
  );
}
