'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">climbing-partner-spa documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' : 'data-bs-target="#xs-components-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' :
                                            'id="xs-components-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' }>
                                            <li class="link">
                                                <a href="components/ActivitiesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoulderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoulderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoulderCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoulderCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoulderUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoulderUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BouldersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouldersListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClimbCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClimbCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClimbDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClimbDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClimbDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClimbDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClimbUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClimbUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClimbsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClimbsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlacesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlacesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserActivitiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserActivitiesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' :
                                        'id="xs-injectables-links-module-AppModule-d4eeb0e12b91f41e807e0758dcad7ab996d362d13b2a46369d38053712580fb7fb2681664afe292c235f7efd7a0f74f7484461d756ddc8e88808cc6f1c44267e"' }>
                                        <li class="link">
                                            <a href="injectables/ApiHttpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiHttpService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivitiesService.html" data-type="entity-link" >ActivitiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiHttpService.html" data-type="entity-link" >ApiHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BouldersService.html" data-type="entity-link" >BouldersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClimbsService.html" data-type="entity-link" >ClimbsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlacesService.html" data-type="entity-link" >PlacesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/MyInterceptor.html" data-type="entity-link" >MyInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});